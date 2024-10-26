import React, { useState } from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from 'react-icons/fa';
import config from '../../config'; // Doğru yolu kontrol edin

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Hata mesajı için durum
  const [loading, setLoading] = useState(false); // Yükleniyor durumu için

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Yükleniyor durumunu başlat
    setError(''); // Önceki hataları temizle

    try {
      const response = await fetch(`${config.backendUrl}/api/login/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful', data);
        // Başarılı giriş sonrası yönlendirme işlemi (React Router kullanıyorsanız)
        // navigate('/dashboard'); // Örnek yönlendirme
      } else {
        const errorData = await response.json();
        console.error('Login failed', errorData);
        setError(errorData.detail || 'Login failed. Please try again.'); // Hata mesajını güncelle
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setError('An error occurred. Please try again.'); // Hata durumunda mesaj
    } finally {
      setLoading(false); // Yükleniyor durumunu bitir
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        {error && <p className="error-message">{error}</p>} {/* Hata mesajı göster */}
        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>

        <button type="submit" disabled={loading}> {/* Yükleniyorsa butonu devre dışı bırak */}
          {loading ? 'Logging in...' : 'Login'}
        </button>

        <div className="register-link">
          <p>
            Don't have an account? <a href="#">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
