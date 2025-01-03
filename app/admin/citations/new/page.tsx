import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import { Label } from '@/src/components/ui/label';
import Form from 'next/form';

const Page = () => {
  const createCitation = (FormData: FormData) => {};
  return (
    <form action="/api/citations" method="post" className="p-10">
      <Label>
        Citattion
        <Input name="citation" />
      </Label>
      <Label>
        Author
        <Input name="author" />
      </Label>
      <Button className="mt-10" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Page;
