import * as React from 'react';
import UserDropdown from './UserDropdown';
import NavigationNotes from './NavigationNotes';
import NoteStatistics from './NoteStatistics';
import NavigationCreateNoteButton from './NavigationCreateNoteButton';
import { Separator } from './ui/Separator';
import { api } from '@/utils/api';

const Navigation: React.FC = () => {
    const { data } = api.notes.getAll.useQuery(undefined, { refetchOnWindowFocus: false });

    // if (!data) return null;

    return (
        <div className="relative min-h-screen w-[300px] min-w-[300px] bg-[#f9f9f9]">
            <UserDropdown />

            <NoteStatistics notes={data} />

            <Separator />

            {/* <RecentNotes /> */}

            <NavigationNotes notes={data} />

            <NavigationCreateNoteButton />
        </div>
    );
};

export default Navigation;
