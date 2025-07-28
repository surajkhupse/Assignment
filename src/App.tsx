import { useQuery } from '@tanstack/react-query';
import { Button, Stack, Box, Typography } from '@mui/material';
import { useState } from 'react';

type CommentType = {
  id: number;
  email: string;
  body: string;
};

const fetchComments = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/comments');
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

const App = () => {
  const [clickCount, setClickCount] = useState(0);

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['comments'],
    queryFn: fetchComments,
    enabled: false,
  });

  const handleClick = () => {
    setClickCount(prev => prev + 1);
    refetch(); // Manually trigger fetch
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        p: 2,
      }}
    >
       <Typography variant="h5" sx={{ mb: 2 }}>
        Button clicked: {clickCount} {clickCount === 1 ? 'time' : 'times'}
      </Typography>
      <Button variant="contained" onClick={handleClick}>
        Fetch Data
      </Button>

      <Stack
        spacing={2}
        sx={{
          mt: 4,
          width: '100vw',
          maxWidth: '94%',
          maxHeight: '70vh',
          overflowY: 'auto',
        }}
      >
        {isLoading && <Typography>Loading...</Typography>}
        {isError && <Typography color="error">Error: {error.message}</Typography>}

        {data &&
          data.map((comment: CommentType) => (
            <Box
              key={comment.id}
              sx={{
                border: '1px solid #ccc',
                borderRadius: 2,
                p: 2,
              }}
            >
              <Typography variant="subtitle1" fontWeight={600}>
                {comment.email}
              </Typography>
              <Typography variant="body2">{comment.body}</Typography>
            </Box>
          ))}
      </Stack>
    </Box>
  );
};

export default App;
