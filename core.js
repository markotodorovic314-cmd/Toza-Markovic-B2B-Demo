(function (root) {
  'use strict';
  const money = n => Math.round((Number(n) + Number.EPSILON) * 100) / 100;
  const quantity = (product, value) => {
    const n = Number(value);
    if (!Number.isFinite(n) || n <= 0 || n > 1000000) throw Error('Unesite količinu između 0 i 1.000.000.');
    return money(Math.ceil((n - 0.00000001) / product.pack) * product.pack);
  };
  const price = (product, partner, qty, rules) => {
    const rule = rules.find(r => r.category === product.category && r.enabled);
    const volume = qty >= product.pallet * 8 ? (rule?.high ?? 7) : qty >= product.pallet * 3 ? (rule?.mid ?? 4) : qty >= product.pallet ? (rule?.low ?? 2) : 0;
    const discount = Math.min(60, Number(partner.discount) + volume);
    return {base: Number(product.price), discount, volume, net:money(product.price * (1 - discount / 100))};
  };
  const totals = (lines, products, partner, rules, freight = 0) => {
    const enriched = lines.map(l => {
      const p=products.find(p=>p.id===l.id);
      if (!p) throw Error('Artikal nije pronađen.');
      const q=quantity(p,l.qty);const rate=price(p,partner,q,rules);
      return {id:p.id,sku:p.sku,name:p.name,unit:p.unit,qty:q,net:rate.net,discount:rate.discount,total:money(q*rate.net),weight:money(q*p.weight),pallets:q/p.pallet};
    });
    const net=money(enriched.reduce((s,l)=>s+l.total,0));
    const shipping=money(freight); const vat=money((net+shipping)*0.2);
    return {lines:enriched,net,shipping,vat,total:money(net+shipping+vat),weight:money(enriched.reduce((s,l)=>s+l.weight,0)),pallets:enriched.reduce((s,l)=>s+l.pallets,0)};
  };
  const reserved = (orders, partnerId) => orders.filter(o=>o.partnerId===partnerId && !o.seed && !['Isporučena','Otkazana','Odbijena'].includes(o.status)).reduce((s,o)=>s+o.total,0);
  const remaining = (orders, partner) => money(partner.credit - partner.balance - reserved(orders,partner.id));
  const stockCheck = (lines, products, wh) => lines.map(l=>({p:products.find(p=>p.id===l.id),qty:l.qty})).filter(x=>!x.p || !x.p.active || x.qty>x.p.stock[wh]).map(x=>x.p?.name || 'Nepoznat artikal');
  const csv = rows => '\ufeff' + rows.map(row=>row.map(v=>'"'+String(v??'').replaceAll('"','""')+'"').join(';')).join('\r\n');
  root.TozaCore={money,quantity,price,totals,reserved,remaining,stockCheck,csv};
})(typeof window !== 'undefined' ? window : globalThis);
