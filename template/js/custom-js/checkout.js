// Add your custom JavaScript for checkout here.
window.storefront.on('widget:@ecomplus/widget-fb-pixel', function () {
  setTimeout(function () {
    const pedido = document.getElementById('order') || false
    const statusOrderPaid = document.querySelector('.order-info__financial-status--paid') || false
    if (pedido && statusOrderPaid) {
      const timeShipping = document.querySelector('.shipping-line')
      const htmlLink = '<br><a href="/acompanhar-pedido" target="blank">Acompanhar Pedido</a>'
      timeShipping.insertAdjacentHTML('afterend', htmlLink)
    }
  }, 800)
})
