import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const pages = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact']

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar position='static' color='primary'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='#'
            sx={{
              mr: 2,
              flexShrink: 0,
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 700,
              letterSpacing: '.05rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Your Portfolio
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='menu'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  {page}
                </MenuItem>
              ))}
              <MenuItem component='a' href='#'>
                <GitHubIcon sx={{ mr: 1 }} />
              </MenuItem>
              <MenuItem component='a' href='#'>
                <LinkedInIcon sx={{ mr: 1 }} />
              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                href={`#${page.toLowerCase().replace(' ', '-')}`}
                sx={{ mx: 1.5, textTransform: 'capitalize', color: 'white' }}
              >
                {page}
              </Button>
            ))}
            <IconButton href='#' color='inherit' sx={{ mx: 1.5 }}>
              <GitHubIcon />
            </IconButton>
            <IconButton href='#' color='inherit' sx={{ mx: 1.5 }}>
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
