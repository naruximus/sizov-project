import { VideoPlayer } from '@/shared/components';
import Image from 'next/image';

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
        <div className="text-center py-4">
          <p className="font-bold text-lg md:text-xl">
            Привет!
            <br />
            <br />
            Меня зовут Сизов Дима, и мне 24 года
            <br />
            <br />
            Я закончил РГИСИ (бывш. СПБГАТИ)
            <br />
            Мастерская И.И.Благодёра
            <br />
            Красный диплом артиста музыкального театра
            <br />
            <br />
            С 2022 года службу в Александринском театре.
            <br />
            <br />
          </p>
        </div>
      </section>
      <section className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <Image
            src="/IMG_2824.jpg"
            alt="Описание фото"
            width={800}
            height={600}
            priority
            className="w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 px-6 md:pl-8 md:pr-24 flex items-center">
          <p className="text-sm md:text-base">
            Список Ролей: (можно выезжающей плашкой)
            <br />
            <br />
            Александринский театр, Санкт - Петербург:
            <br />
            <br />
            <ul className="list-disc pl-5 space-y-2">
              <li>Бетранду - спектакль "Сирано де Бержерак" реж. Н. Рощин</li>
              <li>Любовник Наны гитарист Филлип - "НАНА" А. Жолдак</li>
              <li>Парень с Гостиного двора - "Женитьба" В. Фокин</li>
              <li>Князь Барберини, Фишка, Игрок - "Литургия Zero" В. Фокин</li>
              <li>Маска - "Маскарад. Воспоминания будущего" В. Фокин</li>
              <li>
                Кузьма, музыкант - "Блаженная Ксения. История любви" В. Фокин
              </li>
              <li>Музыкант - "Швейк. Возвращение" В. Фокин</li>
              <li>Королевский барбанщик - "Гамлет" В. Фокин</li>
              <li>Оператор, красногвардеец - "12" А. Оконешников</li>
              <li>Оператор - "Руслан и Людмила" А. Оконешников</li>
              <li>
                Переговорщик, участник хора - "Мамаша Кураж и ее дети" Т.
                Терзопулос
              </li>
              <li>участник хора - "Маузер" Т. Терзопулос</li>
              <li>
                Матрос, участник революционного концерта, артист картонного
                театра марионеток и трагического иллюзиона - "Оптимистическая
                трагедия. Прощальный бал." В. Рыжаков
              </li>
              <li>
                Каторжник, Студент, Официант, Полицейский - "Преступление и
                Наказание" А. Виднянский
              </li>
              <li>Музыкант - "Пушкин. Стихи и мысли" Ю. Васильев</li>
            </ul>
            <br />
            Театр "Приют Комедианта", Санкт - Петербург:
            <br />
            Щелкунчик, Дроссельмейер младший - "Щелкунчик" В. Любский
          </p>
        </div>
      </section>
      <section className="flex flex-col-reverse md:flex-row">
        <div className="w-full md:w-1/2 px-6 md:pl-24 md:pr-8 flex items-center">
          <p className="text-sm md:text-base">
            Съемочный опыт:
            <br />
            <br />
            <ul className="list-disc pl-5 space-y-2">
              <li>2024 Красный смех (к/м) Родион</li>
              <li>2022 Агнец (к/м) Саша</li>
              <li>2021 Свои 5 Глеб Никонов</li>
              <li>2020 Семейные тайны администратор</li>
              <li>2019 Идеальный пациент администратор</li>
            </ul>
            <br />
            <br />
            Также я вожу автомобиль, говорю на английском, чуть-чуть на
            испанском, играю на контрабасе, гитаре, мелодике, немного на
            ударных, и немного на фортепиано.
            <br />
            <br />
            Очень люблю сниматься и буду рад сотрудничеству.
            <br />
            <br />
            Пишите!
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src="/DSC03542.jpg"
            alt="Описание фото"
            width={800}
            height={600}
            priority
            className="w-full h-auto"
          />
        </div>
      </section>
    </main>
  );
}
