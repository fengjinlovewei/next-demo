import { photos } from '@/app/2/data';

export default function PhotoPage({ params: { id } }: never) {
  const photo = photos.find((p) => p.id === id);
  return (
    <div>
      <div>photo</div>
      <img className='block w-1/4 mx-auto mt-10' src={photo?.src} />;
    </div>
  );
}
