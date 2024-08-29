import { Link } from 'react-router-dom'
import githubIcon from '../../../../assets/github-icon.svg'
import { Building, ExternalLink, Users } from 'lucide-react'

export interface ProfileCardProps {
  profile:
    | {
        avatarUrl: string
        name: string
        bio: string
        followers: number
        company: string | null
        user: string
      }
    | undefined
  isLoadingProfile: boolean
}

export function ProfileCard({ profile, isLoadingProfile }: ProfileCardProps) {
  return (
    <div className="w-full h-[212px] mt-[-100px] py-8 px-10 bg-base-profile flex gap-8">
      {isLoadingProfile ? (
        <div className="text-title-lg text-base-subtitle">Carregando...</div>
      ) : (
        <>
          <div className="w-[148px]">
            <img
              src={profile?.avatarUrl}
              alt="Github avatar"
              className="object-cover rounded-lg "
            />
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div>
              <div className="flex justify-between mb-2">
                <p className="text-base-title text-title-lg">{profile?.name}</p>
                <Link
                  to="https://github.com/vinikrdoso"
                  target="_blank"
                  className="flex gap-2 items-center text-brand-blue text-link font-bold"
                >
                  GITHUB
                  <ExternalLink size={12} />
                </Link>
              </div>
              <span className="text-base-text text-md line-clamp-2">
                {profile?.bio}
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
                <span className="text-base-subtitle text-md">
                  {profile?.user}
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <Building size={18} className="text-base-label" />
                <span className="text-base-subtitle text-md">
                  {profile?.company ?? 'Indisponível'}
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <Users size={18} className="text-base-label" />
                <span className="text-base-subtitle text-md">
                  {profile?.followers} seguidores
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
