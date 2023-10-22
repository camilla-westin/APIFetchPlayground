import PolisList from '@/components/polisen/PolisList'

export default function PolisListArchive() {
  return (
    <>
    <h1 className="text-3xl pb-6 bold">Polishändelser</h1>
      <PolisList numofitems={1000} />
    </>
  )
}