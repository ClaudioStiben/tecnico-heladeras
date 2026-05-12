import { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../../lib/firebase';
import { useUI } from '../../context/useUI';
import ModalShell from '../ui/ModalShell';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function mapAuthError(code) {
  switch (code) {
    case 'auth/email-already-in-use':
      return 'Este email ya está registrado.';
    case 'auth/invalid-email':
      return 'Email inválido.';
    case 'auth/weak-password':
      return 'La contraseña es demasiado débil.';
    case 'auth/user-not-found':
    case 'auth/wrong-password':
    case 'auth/invalid-credential':
      return 'Email o contraseña incorrectos.';
    case 'auth/too-many-requests':
      return 'Demasiados intentos. Probá más tarde.';
    case 'auth/network-request-failed':
      return 'Sin conexión. Verificá tu internet.';
    default:
      return 'Ocurrió un error. Intentá de nuevo.';
  }
}

export function RegisterModal() {
  const { registerOpen, closeAll, openLogin } = useUI();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [err, setErr] = useState('');
  const [ok, setOk] = useState('');
  const [loading, setLoading] = useState(false);

  const reset = () => {
    setFullName(''); setEmail(''); setPassword(''); setConfirm('');
    setErr(''); setOk(''); setLoading(false);
  };

  const handleClose = () => { reset(); closeAll(); };

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr(''); setOk('');
    if (!fullName.trim()) return setErr('Ingresá tu nombre.');
    if (!EMAIL_RE.test(email)) return setErr('Email inválido.');
    if (password.length < 6) return setErr('La contraseña debe tener al menos 6 caracteres.');
    if (password !== confirm) return setErr('Las contraseñas no coinciden.');

    setLoading(true);
    try {
      const cred = await createUserWithEmailAndPassword(auth, email.trim(), password);
      await updateProfile(cred.user, { displayName: fullName.trim() });
      setOk('¡Cuenta creada! Ya podés dejar tu reseña.');
      setTimeout(() => { reset(); closeAll(); }, 1500);
    } catch (e) {
      setErr(mapAuthError(e.code));
    } finally {
      setLoading(false);
    }
  };

  return (
    <ModalShell open={registerOpen} onClose={handleClose} title="Crear cuenta" subtitle="Registrate para dejar tu reseña">
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <Field label="Nombre completo">
          <input
            type="text" value={fullName} onChange={(e) => setFullName(e.target.value)}
            className="auth-input" placeholder="Tu nombre" autoComplete="name" required
          />
        </Field>
        <Field label="Email">
          <input
            type="email" value={email} onChange={(e) => setEmail(e.target.value)}
            className="auth-input" placeholder="vos@email.com" autoComplete="email" required
          />
        </Field>
        <Field label="Contraseña (mín. 6 caracteres)">
          <input
            type="password" value={password} onChange={(e) => setPassword(e.target.value)}
            className="auth-input" autoComplete="new-password" required minLength={6}
          />
        </Field>
        <Field label="Confirmar contraseña">
          <input
            type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)}
            className="auth-input" autoComplete="new-password" required minLength={6}
          />
        </Field>

        {err && <Alert type="error">{err}</Alert>}
        {ok && <Alert type="ok">{ok}</Alert>}

        <button
          type="submit" disabled={loading}
          className="mt-2 inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 disabled:opacity-60 text-white font-bold rounded-full transition-all"
        >
          {loading ? <><i className="fas fa-spinner fa-spin" /> Creando…</> : 'Crear cuenta'}
        </button>

        <p className="text-center text-sm text-[var(--text-muted)]">
          ¿Ya tenés cuenta?{' '}
          <button type="button" onClick={() => { reset(); openLogin(); }} className="text-primary-600 font-semibold hover:underline">
            Iniciá sesión
          </button>
        </p>
      </form>
    </ModalShell>
  );
}

export function LoginModal() {
  const { loginOpen, closeAll, openRegister } = useUI();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const [ok, setOk] = useState('');
  const [loading, setLoading] = useState(false);

  const reset = () => {
    setEmail(''); setPassword(''); setErr(''); setOk(''); setLoading(false);
  };

  const handleClose = () => { reset(); closeAll(); };

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr(''); setOk('');
    if (!EMAIL_RE.test(email)) return setErr('Email inválido.');
    if (!password) return setErr('Ingresá tu contraseña.');

    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      setOk('¡Bienvenido!');
      setTimeout(() => { reset(); closeAll(); }, 1000);
    } catch (e) {
      setErr(mapAuthError(e.code));
    } finally {
      setLoading(false);
    }
  };

  return (
    <ModalShell open={loginOpen} onClose={handleClose} title="Iniciar sesión" subtitle="Accedé para dejar tu reseña">
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <Field label="Email">
          <input
            type="email" value={email} onChange={(e) => setEmail(e.target.value)}
            className="auth-input" placeholder="vos@email.com" autoComplete="email" required
          />
        </Field>
        <Field label="Contraseña">
          <input
            type="password" value={password} onChange={(e) => setPassword(e.target.value)}
            className="auth-input" autoComplete="current-password" required
          />
        </Field>

        {err && <Alert type="error">{err}</Alert>}
        {ok && <Alert type="ok">{ok}</Alert>}

        <button
          type="submit" disabled={loading}
          className="mt-2 inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 disabled:opacity-60 text-white font-bold rounded-full transition-all"
        >
          {loading ? <><i className="fas fa-spinner fa-spin" /> Entrando…</> : 'Entrar'}
        </button>

        <p className="text-center text-sm text-[var(--text-muted)]">
          ¿No tenés cuenta?{' '}
          <button type="button" onClick={() => { reset(); openRegister(); }} className="text-primary-600 font-semibold hover:underline">
            Creá una
          </button>
        </p>
      </form>
    </ModalShell>
  );
}

function Field({ label, children }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-semibold text-[var(--text)]">{label}</span>
      {children}
    </label>
  );
}

function Alert({ type, children }) {
  const cls = type === 'error'
    ? 'bg-red-50 text-red-700 border-red-200'
    : 'bg-green-50 text-green-700 border-green-200';
  return (
    <div className={`text-sm px-3 py-2 rounded-lg border ${cls}`}>
      {children}
    </div>
  );
}
