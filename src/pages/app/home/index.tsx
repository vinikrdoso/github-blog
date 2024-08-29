import { ProfileCard } from './components/profile-card'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useSearchParams } from 'react-router-dom'
import { PostCard } from './components/post-card'
import { useQuery } from '@tanstack/react-query'
import { getIssues } from '@/api/get-issues'

const issuesFilterSchema = zod.object({
  filter: zod.string().optional(),
})

type IssuesFilterData = zod.infer<typeof issuesFilterSchema>

export function Home() {
  const [searchParams, setSearchParams] = useSearchParams()
  console.log('🚀 ~ Home ~ searchParams:', searchParams)

  const filter = searchParams.get('filter')
  console.log('🚀 ~ Home ~ filter:', filter)

  const { register, handleSubmit, reset } = useForm<IssuesFilterData>({
    resolver: zodResolver(issuesFilterSchema),
    defaultValues: {
      filter: 'boas',
      // filter: filter ?? '',
    },
  })

  const { data: result, isLoading: isLoadingIssues } = useQuery({
    queryKey: ['issues'],
    queryFn: () =>
      getIssues({
        filter: filter ?? 'boas',
      }),
  })
  console.log('🚀 ~ result :', result)

  function handleIssuesFilter(data: IssuesFilterData) {
    console.log('🚀 ~ handleissuesearch ~ data:', data)
    setSearchParams((state) => {
      state.set('filter', data?.filter)

      return state
    })
    reset()
  }

  return (
    <div className="w-full max-w-[864px] mx-auto pb-10">
      <ProfileCard />

      <div className="mt-[72px]">
        <div className="flex justify-between mb-4">
          <h2 className="text-title-sm text-base-subtitle">issues</h2>
          <span className="text-sm text-base-span">6 publicações</span>
        </div>
        <form onSubmit={handleSubmit(handleIssuesFilter)}>
          <input
            placeholder="Buscar conteúdo"
            className="h-8 w-full p-4 border border-base-border rounded-md bg-base-input text-base-span placeholder-base-label placeholder:text-md"
            {...register('filter')}
          />
        </form>

        <div className="grid grid-cols-2 mt-12 gap-8">
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>
    </div>
  )
}
