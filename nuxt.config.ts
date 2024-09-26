// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
    // typescript:{
    //   tsConfig: {
    //     "extends": "../../../tsconfig.base.json",
    //   }
    // },
    devtools: {enabled: true},
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        }
    },
    // auth: {
    //     strategies: {
    //         local: {
    //             endpoints: {
    //                 login: {url: '/api/auth/login', method: 'post'},
    //                 logout: false,
    //                 user: {url: '/api/auth/user', method: 'get'}
    //             }
    //         }
    //     }
    // },
    app: {
        head: {
            title: "BWA Startup Front",
            link: [
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap"
                }
            ]
        }
    }
})
