import {  GlobalConfig } from 'payload'

export const Header : GlobalConfig = {
  slug: "header",
  fields: [
    {name: "logo", label: "logo", type: "upload", relationTo: "media"},
    {name: "nav", label: "nav", type: "array", fields: [
        {name: "navItemName", label: "navItemName", type:"text"},
        {name:"navItemUrl", label: "navItemUrl", type: "text"},
        {name:"navItemLogo", label: "navItemLogo", type: "upload", relationTo: "media"},
      ]},
    {name: "button", label: "button", type: "group", fields: [
        {name: "label", label: "label", type: "text"},
        {name : "url", label: "url", type: "text"},
      ]},
  ]
}