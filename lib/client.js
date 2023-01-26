import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'uh0hcg9z',
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: true,
  token: 'skaNkoBu26d2NACExwusx3snAhlKc6tIDHXM8vWVWCvxeaMqgVGudC5jnoY5b9Sp4XMyUk1e8AMR997a37ITIjt8jQQ08Gw8eTqizK814efDgr4iYj3jCt9sDWBIiTQUdjyFyv7uDxNNRjgsNyvunuxDLDGaqAE74PRDPkcX5nXYKkbJfDCF'
});



const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);