import { Link } from 'react-router-dom'
import githubIcon from '../../../../assets/github-icon.svg'
import { Building, ExternalLink, Users } from 'lucide-react'

export function ProfileCard() {
  return (
    <div className="w-full h-[212px] mt-[-100px] py-8 px-10 bg-base-profile flex gap-8">
      <div className="w-[273px]">
        <img
          src="https://avatars.githubusercontent.com/u/8796724?v=4"
          alt="Github avatar"
          className="object-cover rounded-lg"
        />
      </div>

      <div className="flex flex-col justify-between">
        <div>
          <div className="flex justify-between mb-2">
            <p className="text-base-title text-title-lg">Nome</p>
            <Link
              to="https://herewecode.io/"
              target="_blank"
              className="flex gap-2 items-center text-brand-blue text-link font-bold"
            >
              GITHUB
              <ExternalLink size={12} />
            </Link>
          </div>
          <span className="text-base-text text-md line-clamp-2">
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.Tristique volutpat pulvinar vel massa,
            pellentesque egestas. Eu viverra massa quam dignissim aenean
            malesuada suscipit. Nunc, volutpat pulvinar vel mass.
          </span>
        </div>

        <div className="flex gap-6 text-base-subtitle text-md">
          <div className="flex gap-2 items-center">
            <img
              src={githubIcon}
              alt="Github Icon"
              width={18}
              className="fill-base-label"
            />
            <span className="text-base-subtitle text-md">vinikrdoso</span>
          </div>
          <div className="flex gap-2 items-center">
            <Building size={18} className="text-base-label" />
            <span className="text-base-subtitle text-md">Rocketseat</span>
          </div>
          <div className="flex gap-2 items-center">
            <Users size={18} className="text-base-label" />
            <span className="text-base-subtitle text-md">32 seguidores</span>
          </div>
        </div>
      </div>
    </div>
  )
}
