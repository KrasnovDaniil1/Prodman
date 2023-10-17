import { ref, h, defineComponent, onMounted } from "vue";

function loadScript(options, root = document.head) {
    return root.appendChild(
        Object.assign(document.createElement("script"), options)
    );
}

const Form = defineComponent(() => {
    const root = ref(null);

    onMounted(() => {
        loadScript(
            {
                innerHTML: `
                !(function (a, m, o, c, r, m) {
                  (a[o + c] = a[o + c] || {
                      setMeta: function (p) {
                          this.params = (this.params || []).concat([p]);
                      },
                  }),
                      (a[o + r] =
                          a[o + r] ||
                          function (f) {
                              a[o + r].f = (a[o + r].f || []).concat([f]);
                          }),
                      a[o + r]({
                          id: "1224914",
                          hash: "d5196285fead90cce4a3e01acaa4486f",
                          locale: "ru",
                      }),
                      (a[o + m] =
                          a[o + m] ||
                          function (f, k) {
                              a[o + m].f = (a[o + m].f || []).concat([[f, k]]);
                          });
              })(window, 0, "amo_forms_", "params", "load", "loaded");
      `,
            },
            root.value
        );
        loadScript(
            {
                id: "amoforms_script_1224914",
                async: "async",
                charset: "utf-8",
                src: "https://forms.amocrm.ru/forms/assets/js/amoforms.js?1697461176",
            },
            root.value
        );
    });

    return () => h("div", { ref: root });
});

export default Form;
