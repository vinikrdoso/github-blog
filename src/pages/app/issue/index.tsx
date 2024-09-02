import { Link, useParams } from 'react-router-dom'
import githubIcon from '../../../assets/github-icon.svg'
import {
  ChevronLeft,
  ExternalLink,
  Calendar,
  MessageCircle,
} from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { getCompleteIssue } from '@/api/get-complete-issue'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Markdown from 'react-markdown'

export function IssuePost() {
  const { id } = useParams()

  const postNumber = Number(id)

  const { data: issue } = useQuery({
    queryKey: ['profile'],
    queryFn: () => getCompleteIssue(postNumber),
  })

  if (!issue) return null

  return (
    <div className="mx-auto">
      <div className="max-w-[864px] bg-base-profile p-8 mt-[-100px] rounded-[10px]">
        <div className="flex justify-between items-center text-link text-brand-blue mb-5">
          <Link to="/" className="flex items-center gap-2">
            <ChevronLeft size={16} /> VOLTAR
          </Link>
          <Link
            to={issue?.htmlUrl ?? ''}
            target="_blank"
            className="flex items-center gap-2"
          >
            VER NO GITHUB
            <ExternalLink size={16} />
          </Link>
        </div>

        <div>
          <span className="text-title-lg text-base-title">{issue?.title}</span>
          <div className="flex gap-6 text-base-subtitle text-md mt-4">
            <div className="flex gap-2 items-center">
              <img
                src={githubIcon}
                alt="Github Icon"
                width={18}
                className="fill-base-label"
              />
              <span className="text-base-label text-md font-bold">
                {issue?.user}
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <Calendar size={18} className="text-base-label" />
              <span className="text-base-label text-md font-bold">
                {formatDistanceToNow(issue.created_at, {
                  locale: ptBR,
                  addSuffix: true,
                })}
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <MessageCircle size={18} className="text-base-label" />
              <span className="text-base-label text-md font-bold">
                {issue && issue.comments > 0
                  ? issue?.comments
                  : 'Sem comentários'}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[864px] text-base-text py-10 px-8">
        <Markdown>{issue?.body}</Markdown>
      </div>
    </div>
  )
}
