import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';

export const BugButton = () => {
    const [error, setError] = useState(false);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    const toggle = () => {
        setError(!error);
    };
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <Button onClick={toggle}>Throw error</Button>
    );
};
