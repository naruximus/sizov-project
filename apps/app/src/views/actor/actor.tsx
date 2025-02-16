'use client';

import { VideoPlayer } from '@/shared/components';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Image from 'next/image';

import { useEffect, useState } from 'react';
import './actor.css';

const getGallery = async () => {
  const data = await fetch('http://localhost:1337/api/tests?populate=*');
  const json = await data.json();
  console.log(json);
  return json.data[0].gallery;
};

const getRandomBinary = () => Math.floor(Math.random() * 2);

export const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    getGallery().then((data) => {
      console.log('data', data);
      setGallery(data);
    });
  }, []);
  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{
        640: 2,
        768: 3,
        1024: 4,
        1280: 5,
        1440: 7,
      }}
    >
      <Masonry gutter={'12px'}>
        {gallery.map((e) => {
          console.log('e', getRandomBinary());
          //@ts-expect-error formats property may be undefined
          const data = e?.formats?.small;
          return (
            <Image
              // className="nth-3:col-span-2"
              //@ts-expect-error formats property may be undefined
              key={e.id}
              width={data?.width}
              height={data?.height}
              alt="Image 1"
              src={`http://127.0.0.1:1337${data?.url}`}
            />
          );
        })}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export function Actor() {
  return (
    <main>
      <section className="pt-10">
        <VideoPlayer
          src="/greet.mov"
          type="video/mp4"
          poster="/greet.png"
          showMuteButton
          showRestartButton
          showPlayPauseButton
        />
      </section>
      <section className="py-4 px-8 md:px-16 lg:px-24">
        <p>
          Здравствуйте.
          <br />
          <br />
          Меня зовут Сезо Вдми, тремя 23 года, я выпускник театральной академии
          Намыховой.
          <br />
          <br />
          В 22-м году я ее закончил и был принять на службу в Александринский
          театр.
          <br />
          <br />
          За не таких постановках как Серон Гдубрижа Рак, Николай Орощина, игра
          Бетранду, Коварайми Мир Хольдокерил, Люкевича, играю там
          Станиславского Есенина, Литр Ге Зоро, Валерия Фокенна, я там Князь
          Борбирине.
          <br />
          <br />
          Нана, Андрея Желдака, любовник Наны.
          <br />
          <br />
          И так далее.
          <br />
          <br />
          Есть съемочный опыт, полнометражный и короткометражный фильм,
          второстепенный главной роли.
          <br />
          <br />
          Также я вожу автомобиль, говорю на английском, чуть-чуть на испанском,
          играю на контрабасию, гитаре, мелодики, ударных могу, могу и на
          фротопиано, если нужно.
          <br />
          <br />
          Очень люблю сниматься и буду радцатьрудничеству.
          <br />
          <br />
          [музыка].
        </p>
      </section>

      <section className="py-4 px-8 md:px-16 lg:px-24">
        <Gallery />
      </section>
    </main>
  );
}
