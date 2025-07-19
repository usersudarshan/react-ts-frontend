import React, { useEffect, useState } from "react";
import { getProfile } from "../services/authService";
import { User } from "../types/api";
import {
  Container,
  Typography,
  Box,
  Paper,
  CircularProgress,
} from "@mui/material";

const ProfilePage: React.FC = () => {
  const [profile, setProfile] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProfile()
      .then(setProfile)
      .catch(() => alert("Failed to load profile. Are you logged in?"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <CircularProgress sx={{ mt: 5 }} />;

  if (!profile) return <Typography sx={{ mt: 5 }}>No profile data.</Typography>;

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ mt: 6, p: 4 }}>
        <Typography variant="h5" gutterBottom>
          My Profile
        </Typography>
        <Box>
          <Typography>
            <strong>Name:</strong> {profile.name}
          </Typography>
          <Typography>
            <strong>Email:</strong> {profile.email}
          </Typography>
          <Typography>
            <strong>Role:</strong> {profile.role}
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default ProfilePage;
