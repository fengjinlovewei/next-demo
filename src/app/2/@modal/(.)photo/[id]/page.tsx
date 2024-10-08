import { photos } from '@/app/2/data';

export default function PhotoModal({ params: { id } }: never) {
  const photo = photos.find((p) => p.id === id);
  return (
    <div className='flex h-60 justify-center items-center fixed bottom-0 bg-slate-300 w-full'>
      <img className='w-52' src={photo?.src} />
    </div>
  );
}
