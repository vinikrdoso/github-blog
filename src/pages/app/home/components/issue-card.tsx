import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Link } from 'react-router-dom'

interface IssueCardProps {
  issue: {
    number: number
    title: string
    body: string
    created_at: string
  }
}

export function IssueCard({ issue }: IssueCardProps) {
  return (
    <Link to={`/issues/${issue.number}`}>
      <div className="h-[260px] bg-base-post rounded-lg p-8">
        <div className="flex justify-between gap-4 mb-5">
          <p className="text-title-md text-base-title line-clamp-2">
            {issue.title}
          </p>
          <span className="w-[30%] text-sm text-base-span">
            {formatDistanceToNow(issue.created_at, {
              locale: ptBR,
              addSuffix: true,
            })}
          </span>
        </div>

        <p className="text-base-text text-md line-clamp-5">{issue.body}</p>
      </div>
    </Link>
  )
}
