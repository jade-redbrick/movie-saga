import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function MoviesList() {
  const { moviesList } = useSelector((state) => state.movie);
  return (
    <div>
      <Grid sx={{ flexGrow: 1 }} container>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={3}>
            {moviesList?.Search?.map((movie, i) => (
              <Grid key={i} item>
                <Card sx={{ maxWidth: "350" }}>
                  <Link to={`/movie/${movie.imdbID}`}>
                    <CardMedia component="img" height="350" image={movie.Poster} alt={movie.Title} />
                    <CardContent>
                      <Typography variant="body2" color="text.primary">
                        {movie.Title}
                      </Typography>
                      <Typography variant="body2" color="text.primary">
                        {movie.Year}
                      </Typography>
                    </CardContent>
                  </Link>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
