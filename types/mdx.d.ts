// required to import .mdx files (https://v0.mdxjs.com/advanced/typescript)
declare module "*.mdx" {
  let MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
}
