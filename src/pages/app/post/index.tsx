import { Link, useParams } from 'react-router-dom'
import githubIcon from '../../../assets/github-icon.svg'
import {
  ChevronLeft,
  ExternalLink,
  Calendar,
  MessageCircle,
} from 'lucide-react'

export function Post() {
  const { id } = useParams()

  return (
    <div className="mx-auto">
      <div className="w-[864px] bg-base-profile p-8 mt-[-100px] rounded-[10px]">
        <div className="flex justify-between items-center text-link text-brand-blue mb-5">
          <Link to="/" className="flex items-center gap-2">
            <ChevronLeft size={16} /> VOLTAR
          </Link>
          <Link
            to="https://herewecode.io/"
            target="_blank"
            className="flex items-center gap-2"
          >
            VER NO GITHUB
            <ExternalLink size={16} />
          </Link>
        </div>

        <div>
          <span className="text-title-lg text-base-title">
            JavaScript data types and data structures
          </span>
          <div className="flex gap-6 text-base-subtitle text-md mt-4">
            <div className="flex gap-2 items-center">
              <img
                src={githubIcon}
                alt="Github Icon"
                width={18}
                className="fill-base-label"
              />
              <span className="text-base-label text-md font-bold">
                vinikrdoso
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <Calendar size={18} className="text-base-label" />
              <span className="text-base-label text-md font-bold">
                Rocketseat
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <MessageCircle size={18} className="text-base-label" />
              <span className="text-base-label text-md font-bold">
                32 comentários
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
