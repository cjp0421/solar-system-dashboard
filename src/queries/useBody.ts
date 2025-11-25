import { useQuery } from "@tanstack/react-query"
import { fetchBody } from "../api/fetchBody"

export const useBody = (id: string) => {
    return useQuery({
        queryKey: ['body', id],
        queryFn: () => fetchBody(id),
        enabled: false
    })
}