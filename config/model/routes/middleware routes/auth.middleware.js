const authenticate = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'No token, authorization denied' });
  
    try {
      // Add JWT verification logic here
      next();
    } catch (err) {
      res.status(403).json({ message: 'Token is not valid' });
    }
  };
  
