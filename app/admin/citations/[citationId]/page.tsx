import { Card, CardContent, CardTitle } from '@/src/components/ui/card';

const Page = async (props: {
  params: Promise<{
    citationId: string;
  }>;
}) => {
  const params = await props.params;
  return (
    <div>
      <Card>
        <CardTitle>Citation 1</CardTitle>
        <CardContent>{params.citationId}</CardContent>
      </Card>
    </div>
  );
};

export default Page;
