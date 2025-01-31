import { VideoPlayer } from '@/shared/components';

export function HeroSection() {
  return (
    <section>
      <VideoPlayer src="/greet.mov" type="video/mp4" poster="/greet.png" />
    </section>
  );
}
