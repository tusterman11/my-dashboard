import { useState } from 'react';
import { Link } from 'react-router-dom';

const inputClass =
  'mt-1 w-full rounded-lg border bg-background px-3 py-2 text-foreground focus:border-primary focus:outline-none';

function AlbumForm({ onSave }) {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [era, setEra] = useState('');
  const [genre, setGenre] = useState('');
  const [errors, setErrors] = useState({
    title: '',
    year: '',
    era: '',
    genre: '',
  });

  function validate() {
    const newErrors = {};

    if (title.trim() === '') {
      newErrors.title = 'Enter the album title.';
    } else if (title.trim().length < 2) {
      newErrors.title = 'The title must contain at least 2 letters.';
    }

    if (year === '') {
      newErrors.year = 'Enter the release year.';
    } else if (Number(year) < 1960) {
      newErrors.year = 'The year cannot be earlier than 1960.';
    }

    if (era === '') {
      newErrors.era = 'Select a musical era.';
    }

    if (genre.trim() === '') {
      newErrors.genre = 'Enter the album genre.';
    }

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    onSave({
      title: title.trim(),
      year: String(year),
      era,
      genre: genre.trim(),
    });
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 md:max-w-xl">
      <div>
        <label htmlFor="album-title" className="font-bold">
          Album title
        </label>
        <input
          id="album-title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          aria-invalid={Boolean(errors.title)}
          aria-describedby={errors.title ? 'album-title-error' : undefined}
          className={`${inputClass} ${errors.title ? 'border-danger' : 'border-border'}`}
        />
        {errors.title && (
          <p id="album-title-error" className="mt-1 text-sm text-danger">
            {errors.title}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="album-year" className="font-bold">
          Release year
        </label>
        <input
          id="album-year"
          type="number"
          value={year}
          onChange={(event) => setYear(event.target.value)}
          aria-invalid={Boolean(errors.year)}
          aria-describedby={errors.year ? 'album-year-error' : undefined}
          className={`${inputClass} ${errors.year ? 'border-danger' : 'border-border'}`}
        />
        {errors.year && (
          <p id="album-year-error" className="mt-1 text-sm text-danger">
            {errors.year}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="album-era" className="font-bold">
          Musical era
        </label>
        <select
          id="album-era"
          value={era}
          onChange={(event) => setEra(event.target.value)}
          aria-invalid={Boolean(errors.era)}
          aria-describedby={errors.era ? 'album-era-error' : undefined}
          className={`${inputClass} ${errors.era ? 'border-danger' : 'border-border'}`}
        >
          <option value="">Select an era</option>
          <option value="1990s">1990s</option>
          <option value="2000s">2000s</option>
          <option value="2010s+">2010s+</option>
        </select>
        {errors.era && (
          <p id="album-era-error" className="mt-1 text-sm text-danger">
            {errors.era}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="album-genre" className="font-bold">
          Genre
        </label>
        <input
          id="album-genre"
          type="text"
          value={genre}
          onChange={(event) => setGenre(event.target.value)}
          aria-invalid={Boolean(errors.genre)}
          aria-describedby={errors.genre ? 'album-genre-error' : undefined}
          className={`${inputClass} ${errors.genre ? 'border-danger' : 'border-border'}`}
        />
        {errors.genre && (
          <p id="album-genre-error" className="mt-1 text-sm text-danger">
            {errors.genre}
          </p>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="rounded-lg bg-primary px-4 py-2 font-bold text-background hover:opacity-90"
        >
          Save album
        </button>
        <Link to="/lista" className="text-muted hover:text-primary">
          Cancel
        </Link>
      </div>
    </form>
  );
}

export default AlbumForm;
