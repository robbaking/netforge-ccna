import ResurserPage from "@/components/resurser/ResurserPage";

interface Props {
  searchParams: Promise<{ domain?: string }>;
}

export default async function Page({ searchParams }: Props) {
  const params = await searchParams;
  return <ResurserPage initialDomain={params.domain} />;
}
