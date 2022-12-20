import client from "../../lib/apollo-client"
import { gql } from "@apollo/client"
import { useRouter } from "next/router"

type PetType = {
  pet: {
    name: string
    images: []
    breed: {
      name: string
    }
  }
}

type StaticType = {
  params: { id: string }
}

const MyPet = ({ pet }: PetType) => {
  const router = useRouter()
  const { id } = router.query

  return <p>{JSON.stringify(pet)}</p>
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true, // can also be true or 'blocking'
  }
}

export async function getStaticProps({ params }: StaticType) {
  const id = params?.id || ""

  // await client.query()
  try {
    const { data } = await client.query({
      variables: {
        id,
      },
      query: gql`
        query GET_PET($id: ID!) {
          pet(where: { id: $id }) {
            name
            images {
              image {
                publicUrl
              }
            }
            breed {
              name
            }
          }
        }
      `,
    })

    return {
      props: {
        pet: { ...data },
      },
    }
  } catch (error) {
    console.log("try error ", error)
  }

  return {
    props: {
      pet: "pet",
    },
  }
}

export default MyPet
