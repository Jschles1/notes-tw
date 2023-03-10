import * as React from 'react';
import { Note } from '@prisma/client';
import Link from 'next/link';
import { FileText, Star } from 'lucide-react';
import { cn } from '@/lib/util';

interface Props {
    note: Note;
    onStarClick: (noteId: string) => void;
}

const NavigationCategoryNote: React.FC<Props> = ({ note, onStarClick }) => {
    const isStarred = note.starred;
    return (
        <div className="relative mb-2 rounded-md p-2 hover:bg-slate-200">
            <Link href={`/${note.id}`} key={note.id} className="flex items-center gap-2 text-sm">
                <FileText size="1rem" color="gray" /> <span>{note.name}</span>{' '}
            </Link>
            <Star
                size="1rem"
                className={cn(
                    'absolute right-[8px] top-[10px] cursor-pointer',
                    isStarred ? 'fill-amber-500 hover:fill-none' : 'fill-none hover:fill-amber-500'
                )}
                onClick={() => onStarClick(note.id)}
            />
        </div>
    );
};

export default NavigationCategoryNote;
