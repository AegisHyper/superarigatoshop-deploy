import{A as i,B as c}from"./chunk-X37N3GUO.js";import{da as s,ha as a,u as d}from"./chunk-AT2VASLQ.js";var l=i`
  query GetProducts {
    products(first: 10) {
      edges {
        node {
          id
          title
          description
          images(first: 1) {
            edges {
              node {
                src
              }
            }
          }
          variants(first: 1) {
            edges {
              node {
                priceV2 {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
  }
`,g=i`
  query GetProductsByTag($tag: String!) {
    products(first: 10, query: $tag) {
      edges {
        node {
          id
          title
          description
          images(first: 1) {
            edges {
              node {
                src
              }
            }
          }
          variants(first: 1) {
            edges {
              node {
                priceV2 {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
  }
`,m=i`
  query GetProductDetails($id: ID!) {
    product(id: $id) {
      id
      title
      description
      images(first: 1) {
        edges {
          node {
            src
          }
        }
      }
      variants(first: 1) {
        edges {
          node {
            id
            priceV2 {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`,I=i`
  query {
  collectionByHandle(handle: "Home page") {
    title
    products(first: 250) {
      edges {
        node {
          id
          title
          variants(first: 10) {
            edges {
              node {
                price { amount currencyCode }
              }
            }
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
}
`,p=class n{constructor(r){this.apollo=r}getProducts(r=void 0){return console.log("Fetching products from Shopify API with collection handle:",r),this.apollo.query({query:r?g:l,variables:{tag:r?`${r}`:void 0}}).pipe(d(o=>(console.log("Raw response from Shopify API:",o),o.data.products.edges.map(e=>{let t=e.node.variants?.edges?.[0]?.node?.priceV2;return{id:e.node.id,variantId:"",title:e.node.title,description:e.node.description||"",price:t?`${t.amount} ${t.currencyCode}`:"N/A",imageUrl:e.node.images.edges[0]?.node.src||""}}))))}getProductDetails(r){return this.apollo.query({query:m,variables:{id:r}}).pipe(d(o=>{let e=o.data.product,t=e?.variants?.edges?.[0]?.node?.priceV2,u=e?.variants?.edges?.[0]?.node?.id;return{id:e.id,variantId:u||"",title:e.title,description:e.description||"",price:t?`${t.amount} ${t.currencyCode}`:"N/A",imageUrl:e.images.edges[0]?.node.src||""}}))}static \u0275fac=function(o){return new(o||n)(a(c))};static \u0275prov=s({token:n,factory:n.\u0275fac,providedIn:"root"})};export{p as a};
