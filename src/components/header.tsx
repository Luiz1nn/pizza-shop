import { Pizza } from 'lucide-react'

import { Separator } from '~/components/ui/separator'

export function Header() {
  return (
    <div className="border-b">
      <div className="x-6 flex h-16 items-center gap-6">
        <Pizza className="h-6 w-6" />

        <Separator orientation="vertical" className="h-6" />
      </div>
    </div>
  )
}
