import Hero from "@/components/hero";
import Link from "next/link";

export default async function Index() {
  return (
    <>
      <Hero />
      <main className="flex-1 flex flex-col gap-6 px-4">
        <h2 className="font-medium text-xl mb-4">Next steps</h2>
        <p>
          Head over to the{" "}
          <Link
            href="/sign-up"
            className="font-bold hover:underline text-foreground/80"
          >
            Sign up
          </Link>{" "}
          page and set up your new profile. Then you will be able to upload your first videos.
        </p>
      </main>
    </>
  );
}
