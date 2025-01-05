import { Card, CardContent } from '@/components/ui/card';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { CalendarIcon, ChevronDown } from 'lucide-react';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { Pencil } from '@/components/svg';
import { ONE } from '@/lib/constants/constants';

const MIN_PASSWORD_LENGTH = 8;
const MIN_NAME_CHAR = 2;
const MIN_USERNAME_CHAR = 2;

// Validation Schema with Zod
const profileSchema = z.object({
  name: z.string().min(MIN_NAME_CHAR, 'Name must be at least 2 characters'),
  username: z
    .string()
    .min(MIN_USERNAME_CHAR, 'Username must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  password: z
    .string()
    .min(MIN_PASSWORD_LENGTH, 'Password must be at least 8 characters'),
  dateOfBirth: z.date({
    required_error: 'Date of birth is required',
  }),
  presentAddress: z.string().min(ONE, 'Present address is required'),
  permanentAddress: z.string().min(ONE, 'Permanent address is required'),
  city: z.string().min(ONE, 'City is required'),
  postalCode: z.string().min(ONE, 'Postal code is required'),
  country: z.string().min(ONE, 'Country is required'),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

export default function Settings() {
  const formik = useFormik<ProfileFormValues>({
    initialValues: {
      name: '',
      username: '',
      email: '',
      password: '',
      dateOfBirth: new Date(),
      presentAddress: '',
      permanentAddress: '',
      city: '',
      postalCode: '',
      country: '',
    },
    validationSchema: toFormikValidationSchema(profileSchema),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Card className="w-full border-none shadow-none rounded-[25px]">
      <CardContent className="px-5 md:px-6">
        <Tabs defaultValue="editProfile">
          <TabsList className="w-full bg-transparent border-b border-[#F4F5F7] rounded-none justify-start h-auto p-0 mt-3 space-x-1 md:space-x-4">
            <TabsTrigger
              value="editProfile"
              className="rounded-none py-3 text-[11px] sm:text-xs md:text-sm font-normal text-secondary"
            >
              Edit Profile
            </TabsTrigger>
            <TabsTrigger
              value="Preferences"
              className="rounded-none py-3 text-[11px] sm:text-xs md:text-sm font-normal text-secondary"
            >
              Preferences
            </TabsTrigger>
            <TabsTrigger
              value="Security"
              className="rounded-none py-3 text-[11px] sm:text-xs md:text-sm font-normal text-secondary"
            >
              Security
            </TabsTrigger>
          </TabsList>

          <TabsContent value="editProfile" className="mt-10">
            <form
              onSubmit={formik.handleSubmit}
              className="space-y-8 md:pl-[60px]"
            >
              <div className="grid grid-cols-1 md:grid-cols-[auto,1fr,1fr] gap-8">
                {/* Profile Picture Column */}
                <div className="flex flex-col space-y-4 items-center md:items-start">
                  <div className="relative">
                    <Avatar className="size-[90px]">
                      <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <Button
                      size="icon"
                      variant="outline"
                      className="absolute bottom-0 left-[66px] size-[30px] rounded-full bg-primary"
                    >
                      <Pencil size={13} />
                    </Button>
                  </div>
                </div>

                {/* Form Fields Columns */}
                <div className="space-y-4 md:ml-14 md:col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[30px] gap-y-4 md:gap-y-[22px]">
                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        {...formik.getFieldProps('name')}
                        placeholder="Full Name"
                      />
                      {formik.touched.name && formik.errors.name && (
                        <p className="text-sm text-destructive">
                          {formik.errors.name}
                        </p>
                      )}
                    </div>

                    {/* Username */}
                    <div className="space-y-2">
                      <Label htmlFor="username">Username</Label>
                      <Input
                        id="username"
                        {...formik.getFieldProps('username')}
                        placeholder="Username"
                      />
                      {formik.touched.username && formik.errors.username && (
                        <p className="text-sm text-destructive">
                          {formik.errors.username}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        {...formik.getFieldProps('email')}
                        placeholder="Email"
                      />
                      {formik.touched.email && formik.errors.email && (
                        <p className="text-sm text-destructive">
                          {formik.errors.email}
                        </p>
                      )}
                    </div>

                    {/* Password */}
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        {...formik.getFieldProps('password')}
                        placeholder="************"
                      />
                      {formik.touched.password && formik.errors.password && (
                        <p className="text-sm text-destructive">
                          {formik.errors.password}
                        </p>
                      )}
                    </div>

                    {/* Date of Birth */}
                    <div className="space-y-2">
                      <Label>Date of Birth</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              'shadow-none bg-transparent rounded-[15px]',
                              'w-full h-[50px] justify-between text-left font-normal',
                              !formik.values.dateOfBirth &&
                                'text-muted-foreground',
                            )}
                          >
                            <span className="flex items-center">
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {formik.values.dateOfBirth ? (
                                format(formik.values.dateOfBirth, 'PPP')
                              ) : (
                                <span>Pick a date</span>
                              )}
                            </span>
                            <ChevronDown color="hsl(var(--secondary))" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={formik.values.dateOfBirth}
                            onSelect={(date) =>
                              formik.setFieldValue('dateOfBirth', date)
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      {formik.touched.dateOfBirth &&
                        formik.errors.dateOfBirth && (
                          <p className="text-sm text-destructive">
                            {JSON.stringify(formik?.errors?.dateOfBirth)}
                          </p>
                        )}
                    </div>

                    {/* Present Address */}
                    <div className="space-y-2">
                      <Label htmlFor="presentAddress">Present Address</Label>
                      <Input
                        id="presentAddress"
                        type="text"
                        {...formik.getFieldProps('presentAddress')}
                        placeholder="Present Address"
                      />
                      {formik.touched.presentAddress &&
                        formik.errors.presentAddress && (
                          <p className="text-sm text-destructive">
                            {formik.errors.presentAddress}
                          </p>
                        )}
                    </div>

                    {/* Permanent Address */}
                    <div className="space-y-2">
                      <Label htmlFor="permanentAddress">
                        Permanent Address
                      </Label>
                      <Input
                        id="permanentAddress"
                        type="text"
                        {...formik.getFieldProps('permanentAddress')}
                        placeholder="Permanent Address"
                      />
                      {formik.touched.permanentAddress &&
                        formik.errors.permanentAddress && (
                          <p className="text-sm text-destructive">
                            {formik.errors.permanentAddress}
                          </p>
                        )}
                    </div>

                    {/* City */}
                    <div className="space-y-2">
                      <Label>City</Label>
                      <Input
                        id="city"
                        type="text"
                        {...formik.getFieldProps('city')}
                        placeholder="City"
                      />
                      {formik.touched.city && formik.errors.city && (
                        <p className="text-sm text-destructive">
                          {formik.errors.city}
                        </p>
                      )}
                    </div>

                    {/* Postal Code */}
                    <div className="space-y-2">
                      <Label htmlFor="postalCode">Postal Code</Label>
                      <Input
                        id="postalCode"
                        {...formik.getFieldProps('postalCode')}
                        placeholder="Postal Code"
                      />
                      {formik.touched.postalCode &&
                        formik.errors.postalCode && (
                          <p className="text-sm text-destructive">
                            {formik.errors.postalCode}
                          </p>
                        )}
                    </div>

                    {/* Country */}
                    <div className="space-y-2">
                      <Label>Country</Label>
                      <Input
                        id="country"
                        {...formik.getFieldProps('country')}
                        placeholder="Select Country"
                      />
                      {formik.touched.country && formik.errors.country && (
                        <p className="text-sm text-destructive">
                          {formik.errors.country}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-end space-x-4 pt-4">
                    <Button
                      type="submit"
                      size={'md'}
                      className="w-full sm:w-[128px] text-sm sm:text-base"
                    >
                      Save
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </TabsContent>
          <TabsContent value="Preferences">In Password</TabsContent>
          <TabsContent value="Security">In Password</TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
