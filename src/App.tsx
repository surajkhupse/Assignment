
import { useQuery } from '@tanstack/react-query';
import { Button, Stack, Box, Typography } from '@mui/material';
import { useClickStore } from './store/useClickStore';
import { fetchComments } from './api/fetchComments';
import type { CommentType } from './types/CommentType';


const App = () => {
  const clickCount = useClickStore((state) => state.clickCount);
  const increment = useClickStore((state) => state.increment);

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['comments'],
    queryFn: fetchComments,
    enabled: false,
  });

  const handleClick = () => {
    increment();
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
