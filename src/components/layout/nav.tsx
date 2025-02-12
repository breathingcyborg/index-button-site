import { Link } from 'react-router';
import logo from '../../assets/logo.svg';
import Github from '../../assets/github.svg?react';
import { buttonVariants } from '../ui/button';
import { cn } from '@/lib/utils';
import { GITHUB_REPO_URL } from '@/constants';

export function Nav() {
    return <div>
        <div className="container py-6">
            <div className="flex justify-between">
                <Link className='shrink-0'  to={'/'}>
                    <img src={logo} alt='index button logo'/>
                </Link>
                <ul>
                    <li>
                        <a href={GITHUB_REPO_URL} className={cn(buttonVariants({ variant: 'secondary', size: 'lg'}), '[&_svg]:size-5')}>
                            <Github />
                            <span className='hidden sm:inline'>
                                View on github
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
}