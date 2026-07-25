import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Hospital Network Simulation",
  description: "This is a lab to configure a hospital network in Cisco Packet Tracer.",
  base: "/hospital_network_simulation",
  head: [['link', { rel: 'icon', href: 'favicon/favicon.png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sagedemage/hospital_network_simulation' }
    ]
  }
})
