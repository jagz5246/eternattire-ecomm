import imageUrlBuilder from "@sanity/image-url/";
import { createClient } from "next-sanity";

export const client = createClient({
    projectId:"l16oiu3c",
    dataset:'production',
    apiVersion:'2022-03-25',
    useCdn: true
})

const builder = imageUrlBuilder(client)

export const urlFor =(source: any)=>{
    return builder.image(source)
}