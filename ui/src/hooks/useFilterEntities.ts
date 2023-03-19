import { useQuery, gql } from '@apollo/client';


export const TASK_QUERY = gql`
    query ($isTrending: Boolean, $status: Status)  {
  getEntities (filter: {isTrending: $isTrending, status: $status}) {
    result {
      isTrending
      title
      description
      thumbnail
      pledgeTotal
      pledgeGoal
      codeSubmissionTotal
      numComments
      status
      author {
        name
        picture
      }
    }
  }
}
`

type TaskStatus = "OPEN" | "CLOSED"
export type TaskVariables = {
  isTrending?: boolean;
  status?: TaskStatus;
};
export const useTaskQuery = (variables: { isTrending?: boolean, status?: TaskStatus }) => {
  const { error, loading, data, refetch } = useQuery(TASK_QUERY, {
    variables,
    notifyOnNetworkStatusChange: true
  })

  return {
    error,
    loading,
    data,
    refetch
  }
}