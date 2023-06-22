import { Switch } from '@headlessui/react'
import { useRecoilState } from 'recoil'
import { estadoTema } from '@/lib/atoms'
import classNames from '@/utils/classNames'


export default function ToggleSwitch() {
  const [enabled, setEnabled] = useRecoilState(estadoTema)

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={classNames(
        enabled ? 'bg-green-600' : 'bg-gray-200',
        'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 mr-2'
      )}
    >
      <span className="sr-only">Dark / Light mode</span>
      <span
        aria-hidden="true"
        className={classNames(
          enabled ? 'translate-x-5' : 'translate-x-0',
          'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
        )}
      />
    </Switch>
  )
}