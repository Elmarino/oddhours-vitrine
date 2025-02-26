import { buttonVariants } from '@/src/components/ui/button_';
import { Card, CardContent, CardTitle } from '@/src/components/ui/card';
import Link from 'next/link';

const Admin = async () => {
  /* try to display loading and error */
  /*   await new Promise((r) => setTimeout(r, 5000));

  throw new Error('wowo', {
    cause: CardContent
  }); */
  return (
    <div>
      <Card>
        <CardTitle>Admin Page</CardTitle>
        <CardContent>This is the admin page</CardContent>
        <CardContent className="flex flex-col">
          <Link
            className={`${buttonVariants({
              size: 'lg',
              variant: 'outline'
            })} mb-4`}
            href={'admin/citations/new'}
          >
            Créer une nouvelle citation
          </Link>
          <Link
            className={`${buttonVariants({
              size: 'lg',
              variant: 'outline'
            })} mb-4`}
            href={'admin/citations/ROCK'}
          >
            Aller voir le ROCK
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default Admin;
