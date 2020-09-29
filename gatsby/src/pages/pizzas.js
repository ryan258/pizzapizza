import React from 'react';
import { graphql } from 'gatsby';
import PizzaList from '../components/PizzaList';

export default function PizzasPage({ data }) {
  console.log(data);
  const pizzas = data.pizzas.nodes;

  return (
    <>
      <PizzaList pizzas={pizzas} />
    </>
  );
}

// gatsby magic puts this graphql query into the props
export const query = graphql`
  query PizzaQuery {
    pizzas: allSanityPizza {
      nodes {
        name
        id
        price
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
        slug {
          current
        }
        toppings {
          id
          name
        }
      }
    }
  }
`;
// export const query = graphql`
//   query PizzaQuery {
//     pizzas: allSanityPizza {
//       nodes {
//         name
//         id
//         price
//         slug {
//           current
//         }
//         toppings {
//           id
//           name
//         }
//       }
//     }
//   }
// `;
