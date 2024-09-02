import { ProfileCard } from './components/profile-card'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useSearchParams } from 'react-router-dom'
import { IssueCard } from './components/issue-card'
import { useMutation, useQuery } from '@tanstack/react-query'
import { getIssues } from '@/api/get-issues'
import { getProfile } from '@/api/get-profile'
import { useCallback, useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import debounce from 'debounce'

const issuesFilterSchema = zod.object({
  filter: zod.string().optional(),
})

type IssuesFilterData = zod.infer<typeof issuesFilterSchema>

export function Home() {
  const [searchParams, setSearchParams] = useSearchParams()

  const filter = searchParams.get('filter') ?? ''

  const { handleSubmit, control } = useForm<IssuesFilterData>({
    resolver: zodResolver(issuesFilterSchema),
    defaultValues: {
      filter: filter ?? '',
    },
  })

  const {
    mutateAsync: handleGetIssues,
    isPending: isLoadingIssues,
    data: issuesData,
  } = useMutation({
    mutationFn: getIssues,
  })

  const { data: profile, isLoading: isLoadingProfile } = useQuery({
    queryKey: ['profile'],
    queryFn: () => getProfile(),
  })

  const handleIssuesFilter = useCallback(
    ({ filter }: IssuesFilterData) => {
      console.log('🚀 ~ Home ~ filter:', filter)

      setSearchParams((state) => {
        if (filter) {
          state.set('filter', filter)
        } else {
          state.delete('filter')
        }

        return state
      })

      handleGetIssues({ filter })
    },
    [handleGetIssues, setSearchParams],
  )

  const isIssuesListEmpty = isLoadingIssues || !issuesData?.total_count

  useEffect(() => {
    handleGetIssues({ filter })
  }, [])

  const TextInput = () => {
    const handleTyping = useCallback(
      debounce((value: string) => {
        handleIssuesFilter({ filter: value })
      }, 1000),
      [],
    )

    return (
      <Controller
        name="filter"
        control={control}
        render={({ field: { value, onChange } }) => (
          <input
            id="filter"
            value={value || ''}
            onChange={(e) => {
              onChange(e.target.value)
              handleTyping(e.target.value)
            }}
            placeholder="Buscar conteúdo"
            className="h-8 w-full p-4 border border-base-border rounded-md bg-base-input text-base-span placeholder-base-label placeholder:text-md"
          />
        )}
      />
    )
  }

  return (
    <div className="w-full max-w-[864px] mx-auto pb-10">
      <ProfileCard profile={profile} isLoadingProfile={isLoadingProfile} />

      <div className="mt-[72px]">
        <div className="flex justify-between mb-4">
          <h2 className="text-title-sm text-base-subtitle">Publicações</h2>
          <span className="text-sm text-base-span">
            {issuesData?.total_count && issuesData.total_count > 0
              ? `${issuesData?.total_count} publicações`
              : 'Sem publicações'}
          </span>
        </div>
        <form onSubmit={handleSubmit(handleIssuesFilter)}>
          <TextInput />
          {/* <input
            placeholder="Buscar conteúdo"
            className="h-8 w-full p-4 border border-base-border rounded-md bg-base-input text-base-span placeholder-base-label placeholder:text-md"
            {...register('filter', {
              required: true,
              onChange(event) {
                debounce(
                  handleIssuesFilter({ filter: event.target.value }),
                  2000,
                )
              },
            })}
          />
          <input type="submit" /> */}
        </form>

        {isIssuesListEmpty || isLoadingIssues ? (
          <div className="text-title-lg text-base-subtitle mt-12 flex flex-1 items-center justify-center">
            Carregando...
          </div>
        ) : (
          <div className="grid grid-cols-2 mt-12 gap-8">
            {issuesData?.items?.map((issue) => (
              <IssueCard key={issue.number} issue={issue} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
