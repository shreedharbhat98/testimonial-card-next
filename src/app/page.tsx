import Image from "next/image";

export default function Home() {
  return (
    <main className="w-[340px] border border-neutral-200 rounded-lg bg-white d-flex justify-center mx-auto mt-[200px] p-6 shadow-sm">
      <div className="flex gap-4 w-full">
        <Image
          src="/profile-thumbnail.png"
          alt="avatar"
          loading="lazy"
          width={64}
          height={48}
          className="rounded-full"
        />
        <div className="mb-4">
          <div className="text-lg font-semibold">Sarah Dole</div>
          <div className="text-sm text-neutral-600">@sarahdole</div>
        </div>
      </div>
      <div className="text-neutral-600 text-base font-normal mt-4">
        I&apos;ve been searching for high-quality abstract images for my design
        projects, and I&apos;m thrilled to have found this platform. The variety and
        depth of creativity are astounding!
      </div>
    </main>
  );
}
