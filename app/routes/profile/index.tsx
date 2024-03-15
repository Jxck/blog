import type { FC } from "hono/jsx";
import { createRoute } from "honox/factory";
import { Heading } from "../../components/Heading";
import { LINK } from "../../constants";

const SnsList: {
  id: number;
  title: "X" | "BlueSky" | "GitHub" | "LinkedIn" | "Email" | "Zenn";
  href: string;
}[] = [
  {
    id: 1,
    title: "X",
    href: LINK.X,
  },
  {
    id: 2,
    title: "BlueSky",
    href: LINK.BlueSky,
  },
  {
    id: 3,
    title: "GitHub",
    href: LINK.GITHUB,
  },
  {
    id: 4,
    title: "LinkedIn",
    href: LINK.LINKEDIN,
  },
  {
    id: 6,
    title: "Email",
    href: LINK.EMAIL,
  },
  {
    id: 7,
    title: "Zenn",
    href: LINK.ZENN,
  },
];

const Text: FC<{ text: string }> = ({ text }) => {
  return <p class="text-lg font-medium mt-6">{text}</p>;
};

export default createRoute((c) => {
  return c.render(
    <>
      <Heading title="About Me" />

      <Text text="22歳のフロントエンドエンジニアとして働いているユウトです。出身は日本です。🇯🇵🏯" />
      <Text text="TypeScript, Reactを主に触っており、最近ではWebパフォーマンス / Developer Experienceに興味があります。" />

      <div class="mt-6 border-t border-black">
        <Text text="2022年からフルタイムでエンジニアとして働き始め、スピード感のある開発をしていく中で、フロントエンドとバックエンド両方の経験をさせていただけたのはとてもいい経験でした。そして2023年、新しい会社にジョインし、Webフロントエンド領域の様々なことに挑戦し、開発者としてレベルアップすることに注力しています。" />
        <Text text="空いた時間で、技術のキャッチアップをし、それを実際に自分の手で動かしてみたりすること。理解が足りない部分や、新しく学んだことを記事にすることも好きです。あとは勉強会に行って発表したりすることも好きです。" />
      </div>

      <ul class="text-lg mt-6 pt-6 border-t border-black">
        {SnsList.map(({ id, title, href }) => (
          <li key={id} class="flex items-center py-1">
            <div class="w-2 h-2 rounded bg-black mr-2" />
            <a
              href={href}
              class="underline-offset-2 underline mr-1 text-blue-600"
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </>,
    { title: "Profile | yossy.dev" },
  );
});
