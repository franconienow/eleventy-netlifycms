function cta1({ props, settings }) {
  return `
    <section style="background: ${settings.general.bg}; color: ${settings.general.color};">
      <div class="container py-5">
        <div class="row">
          <div class="col-6">
            <h2>${props.title}</h2>
            <p class="fs-4">${props.subtitle}</p>
          </div>
          <div class="col-6 d-flex align-items-center justify-content-end">
            <a style="background: ${settings.btn.bg}; color: ${settings.btn.color};"
              class="btn" href="${props.btn.url}">${props.btn.label}</a>
          </div>
        </div>
      </div>
    </section>
  `
}

function cta2({ props, settings }) {
  return `
  <section style="background: ${settings.general.bg}; color: ${settings.general.color};">
      <div class="container py-5">
        <div class="row">
          <div class="col-6 mx-auto text-center">
            <h2>${props.title}</h2>
            <p class="fs-4">${props.subtitle}</p>
            <a style="background: ${settings.btn.bg}; color: ${settings.btn.color};"
              class="btn" href="${props.btn.url}">${props.btn.label}</a>
          </div>
        </div>
      </div>
    </section>
  `
}

module.exports =  { cta1, cta2 };
