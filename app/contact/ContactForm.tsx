'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectTrigger,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Loader2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const countries = [
  'Nepal', 'India', 'Bangladesh', 'Sri Lanka', 'Vietnam',
  'Myanmar', 'Philippines', 'Indonesia', 'China', 'Other',
];

const serviceKeys = ['student', 'work', 'ssw', 'language', 'job', 'settlement', 'translation', 'other'] as const;

export default function ContactForm() {
  const { t } = useLanguage();
  const f = t.form;

  const [formData, setFormData] = useState({
    full_name: '',
    country: '',
    email: '',
    phone: '',
    interested_service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ full_name: '', country: '', email: '', phone: '', interested_service: '', message: '' });
      } else {
        setError('Failed to submit form. Please try again.');
      }
    } catch {
      setError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <Card className="bg-white shadow-xl">
        <CardContent className="pt-8 pb-8 text-center">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-brand-blue-900 mb-2">{f.successTitle}</h3>
          <p className="text-muted-foreground mb-6">{f.successDesc}</p>
          <Button
            onClick={() => setIsSuccess(false)}
            variant="outline"
            className="border-brand-blue-600 text-brand-blue-600"
          >
            {f.sendAnother}
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl text-brand-blue-900">{f.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="full_name">{f.name} {f.required}</Label>
              <Input
                id="full_name"
                placeholder={f.namePlaceholder}
                required
                value={formData.full_name}
                onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="country">{f.country} {f.required}</Label>
              <Select value={formData.country} onValueChange={(v) => setFormData({ ...formData, country: v })}>
                <SelectTrigger>
                  <SelectValue placeholder={f.countryPlaceholder} />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((c) => (
                    <SelectItem key={c} value={c}>{c}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">{f.email} {f.required}</Label>
              <Input
                id="email"
                type="email"
                placeholder={f.emailPlaceholder}
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">{f.phone}</Label>
              <Input
                id="phone"
                type="tel"
                placeholder={f.phonePlaceholder}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="service">{f.service} {f.required}</Label>
            <Select value={formData.interested_service} onValueChange={(v) => setFormData({ ...formData, interested_service: v })}>
              <SelectTrigger>
                <SelectValue placeholder={f.servicePlaceholder} />
              </SelectTrigger>
              <SelectContent>
                {serviceKeys.map((key) => (
                  <SelectItem key={key} value={f.services[key]}>{f.services[key]}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">{f.message} {f.required}</Label>
            <Textarea
              id="message"
              placeholder={f.messagePlaceholder}
              rows={5}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <Button
            type="submit"
            className="w-full bg-brand-gold-500 hover:bg-brand-gold-600 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {f.sending}
              </>
            ) : f.send}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
